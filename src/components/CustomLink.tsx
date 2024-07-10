import Link from 'next/link';
import Image from 'next/image';
import { LinkType } from '~types/index';

interface LinkProps {
  link: LinkType;
  onClick?: () => void;
}

const CustomLink: React.FC<LinkProps> = ({ link, onClick }) => {
  let href = '';
  let ariaLabel = '';

  switch (link.linkType) {
    case 'internal':
      href = link.elementId
        ? `/#${link.elementId.current}`
        : `/${link.pageReference?.slug?.current}`;
      ariaLabel = `Navigate to ${link.title}`;
      break;
    case 'external':
      href = link.url || '#';
      ariaLabel = `Visit ${link.title} website`;
      break;
    case 'email':
      href = `mailto:${link.email}`;
      ariaLabel = `Send email to ${link.title}`;
      break;
    case 'phone':
      href = `tel:${link.phone}`;
      ariaLabel = `Call ${link.title}`;
      break;
    default:
      return null;
  }

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target={link.linkType === 'external' ? '_blank' : undefined}
      rel={link.linkType === 'external' ? 'noopener noreferrer' : undefined}
      onClick={onClick}
    >
      {link.icon ? (
        <Image src={link.icon.url} alt={link.title} width={32} height={32} />
      ) : (
        link.title
      )}
    </Link>
  );
};

export default CustomLink;
