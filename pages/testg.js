import { useEffect } from "react"

export default function Home() {
    useEffect(()=>{
        const test = async () => {
            const t = await fetch("https://h37f678mu8.execute-api.ap-northeast-2.amazonaws.com/prod/info", {
                credentials: "include"
            })
            console.log(t)
        }
        test()
    });
  return (
    <div>
        Test
    </div>
  )
}
