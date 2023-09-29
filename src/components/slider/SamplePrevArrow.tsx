interface SamplePrevArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function SamplePrevArrow(props: SamplePrevArrowProps) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
}
