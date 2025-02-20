import { Nav, NavLink } from '@/components/Nav';

export const dynamic = 'force-dynamic';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href={'/admin/dashboard'}>Dashboard</NavLink>
        <NavLink href={'/admin/products'}>Products</NavLink>
        <NavLink href={'/admin/users'}>Users</NavLink>
        <NavLink href={'/admin/orders'}>Orders</NavLink>
      </Nav>
      <div className="container m-6">{children}</div>
    </>
  );
}
