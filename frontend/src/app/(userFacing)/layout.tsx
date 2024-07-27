import { Nav, NavLink } from "@/components/NavBar";


export default function UserLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <>
        <Nav>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/transactions"}>Transactions</NavLink>
        </Nav>

        <div className="container my-6">

            {children}

        </div>
        </>
      
    );
  }
