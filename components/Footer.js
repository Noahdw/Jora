



export default function Footer({ copyrightText }) {
  return (
    <footer className="py-16 flex flex-col items-center">
      <p className="dark:text-white uppercase mb-3 font-bold opacity-60">
        {copyrightText}
      </p>
    </footer>
  );
}
