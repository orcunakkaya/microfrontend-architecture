type RemoteErrorFallbackProps = {
  title: string;
  message: string;
};

function RemoteErrorFallback({
  title,
  message,
}: RemoteErrorFallbackProps) {
  return (
    <div
      style={{
        border: '1px solid #fecaca',
        backgroundColor: '#fef2f2',
        color: '#991b1b',
        borderRadius: 12,
        padding: 16,
      }}
    >
      <h3 style={{ marginTop: 0, marginBottom: 8 }}>{title}</h3>
      <p style={{ margin: 0, lineHeight: 1.5 }}>{message}</p>
    </div>
  );
}

export default RemoteErrorFallback;