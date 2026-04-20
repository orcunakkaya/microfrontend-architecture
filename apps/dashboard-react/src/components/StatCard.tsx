type StatCardProps = {
  title: string;
  value: string;
};

function StatCard({ title, value }: StatCardProps) {
  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        padding: 18,
        minWidth: 180,
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.04)',
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: 10, fontSize: 16 }}>{title}</h3>
      <p style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>{value}</p>
    </div>
  );
}

export default StatCard;