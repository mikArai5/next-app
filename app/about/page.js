import Link from "next/link";

export const metadata = {
    title: 'About | ももも'
}

export default function About() {
    return (
        <>
            <h1>About</h1>
            <p>
                <Link href="/">トップページに戻る</Link>
            </p>
        </>
    )
}