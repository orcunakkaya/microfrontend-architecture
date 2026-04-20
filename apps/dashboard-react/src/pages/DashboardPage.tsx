import StatCard from '../components/StatCard';

function DashboardPage() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Dashboard Remote</h1>
      <p>Bu ekran React remote içinden geliyor.</p>

      <div style={{ display: 'flex', gap: 16, marginTop: 24, alignItems: 'center', justifyContent: 'center' }}>
        <StatCard title="Toplam Kullanıcı" value="1,284" />
        <StatCard title="Aktif Oturum" value="328" />
        <StatCard title="Dönüşüm" value="%12.4" />
      </div>
    </div>
  );
}

export default DashboardPage;