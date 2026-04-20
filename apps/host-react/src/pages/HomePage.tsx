function HomePage() {
  return (
    <div>
      <h1 style={{ marginTop: 20, marginBottom: 12 }}>Home</h1>
      <p style={{ color: '#4b5563', lineHeight: 1.6, marginBottom: 24 }}>
        Bu proje, Module Federation kullanarak React host uygulaması içinde
        React ve Vue remote uygulamalarının birlikte nasıl çalıştırılabileceğini
        gösteren küçük bir microfrontend demosudur.
      </p>

      <div
        style={{
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: 12,
            padding: 18,
            minWidth: 220,
            backgroundColor: '#f9fafb',
          }}
        >
          <h3 style={{ marginTop: 0 }}>Host</h3>
          <p style={{ marginBottom: 0, color: '#6b7280' }}>
            Routing, layout ve remote orchestration
          </p>
        </div>

        <div
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: 12,
            padding: 18,
            minWidth: 220,
            backgroundColor: '#f9fafb',
          }}
        >
          <h3 style={{ marginTop: 0 }}>React Remote</h3>
          <p style={{ marginBottom: 0, color: '#6b7280' }}>
            Dashboard ekranı React ile sunuluyor
          </p>
        </div>

        <div
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: 12,
            padding: 18,
            minWidth: 220,
            backgroundColor: '#f9fafb',
          }}
        >
          <h3 style={{ marginTop: 0 }}>Vue Remote</h3>
          <p style={{ marginBottom: 0, color: '#6b7280' }}>
            Profile ekranı Vue ile mount ediliyor
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;