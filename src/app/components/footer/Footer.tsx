import styles from './style.module.css';

interface FooterProps {
  color?: string;
}

export default function Footer({ color = '#fff' }: FooterProps) {
  
  return (
    <footer 
      className={styles.footer}
      style={{ color }}
    >
      <p>© 2026 YJ.SOFT. All rights reserved.</p>
    </footer>
  );
}