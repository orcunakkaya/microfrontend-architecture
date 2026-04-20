import StatCard from '../components/StatCard';

function DashboardPage() {
  return (
    <div>
      <p style={{ color: '#6b7280', lineHeight: 1.6 }}>
        Bu ekran React remote uygulamasından yüklenmektedir.
      </p>

      <div
        style={{
          display: 'flex',
          gap: 16,
          marginTop: 24,
          flexWrap: 'wrap',
        }}
      >
        <StatCard title="Toplam Kullanıcı" value="1,284" />
        <StatCard title="Aktif Oturum" value="328" />
        <StatCard title="Dönüşüm" value="%12.4" />
      </div>
    </div>
  );
}

export default DashboardPage;