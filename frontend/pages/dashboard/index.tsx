import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Link href="/">
        <a>Voltar para home</a>
      </Link>
    </>
  )
}