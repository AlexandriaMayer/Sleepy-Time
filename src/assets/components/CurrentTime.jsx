import { Temporal } from "temporal-polyfill"

const CurrentTime = () => {
    console.log(Temporal.Now.zonedDateTimeISO().toString())
    return(
        <div id="currentTime">It's</div>
    )
}
export default CurrentTime