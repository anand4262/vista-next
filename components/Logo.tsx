import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="flex items-center text-black dark:text-white text-2xl font-semibold gap-4"
    >
      <Image
        src="/images/Vista-Legal-Registered-Logo.png"
        alt="Kebab Knights Logo"
        width={200} // ✅ Explicit width
        height={60} // ✅ Explicit height
        className="object-contain"
        priority 
      />
    </Link>
  );
};

export default Logo;
