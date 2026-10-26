interface SectionHeaderProps {
  title: string;
  linkTo?: string;
}

function SectionHeader({ title = "Section title", linkTo }: SectionHeaderProps) {
  return (
    <div className="sectionHeader">
      <h2>{title}</h2>
      {linkTo && (
        <a href={linkTo} className="sectionHeader__viewAll">
          View all →
        </a>
      )}
    </div>
  );
}

export default SectionHeader;

