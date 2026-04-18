import { useEffect, useRef } from 'react';

export default function VueRemote() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import('profile_remote/mount')
      .then((mod) => {
        if (ref.current) {
          mod.mount(ref.current);
        }
      })
      .catch((err) => {
        console.error('Vue remote yüklenemedi:', err);
      });
  }, []);

  return <div ref={ref} />;
}