import { useEffect, useRef, useState } from 'react';
import RemoteErrorFallback from './RemoteErrorFallback';

export default function VueRemote() {
  const ref = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    import('profile_remote/mount')
      .then((mod) => {
        if (ref.current) {
          mod.mount(ref.current);
        }
      })
      .catch((err) => {
        console.error('Vue remote yüklenemedi:', err);
        setHasError(true);
      });
  }, []);

  if (hasError) {
    return (
      <RemoteErrorFallback
        title="Profile yüklenemedi"
        message="Vue remote uygulaması şu anda görüntülenemiyor."
      />
    );
  }

  return <div ref={ref} />;
}