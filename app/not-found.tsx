import Link from "next/link";

export default function NotFound (){
    return (
        <section >
            <h1>404 - Page Not Found</h1>
            <p>This page you are looking for doess not exits.</p>
            <Link href={"/"}>Go Home</Link>
        </section>
    )
}