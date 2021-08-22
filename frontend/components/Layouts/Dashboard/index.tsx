type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return <div className="dashboardLayout">{children}</div>;
}
