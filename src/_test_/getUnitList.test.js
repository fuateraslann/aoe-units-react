import {rest} from "msw"
import "@testing-library/jest-dom/extend-expect"
import {setupServer} from "msw/node"
import {getUnitList} from '../Api/apiForUnits'


// return value were changed here
const server = setupServer(
    rest.get("http://localhost:3004/units",(req,res,ctx)=>{
        return res(ctx.json("okey"))
    })
)
beforeAll(()=> server.listen())
afterEach(()=> server.listen())
afterAll(()=>server.close())

// fetch func. works properly
test("get user" , async()=>{
   await expect(getUnitList()).resolves.toBe("okey")
})