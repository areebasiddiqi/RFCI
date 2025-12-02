import styles from './FiverrWatermark.module.css';

export default function FiverrWatermark() {
    return (
        <div className={styles.watermark}>
            <a
                href="https://www.fiverr.com/hamidsiddiqii"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
            >
                <svg
                    className={styles.icon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M23 11.5c0 6.351-5.149 11.5-11.5 11.5S0 17.851 0 11.5 5.149 0 11.5 0 23 5.149 23 11.5zm-2.3 0c0-5.082-4.118-9.2-9.2-9.2s-9.2 4.118-9.2 9.2 4.118 9.2 9.2 9.2 9.2-4.118 9.2-9.2zM7.432 8.626h1.013v1.014H7.432V8.626zm5.485 0h1.013v1.014h-1.013V8.626zm-2.742 0h1.013v1.014h-1.013V8.626zm4.118 2.742h-1.013v4.118h1.013v-4.118zm-2.742 0h-1.013v4.118h1.013v-4.118zm-2.743 0H7.795v4.118h1.013v-4.118z" />
                </svg>
                <span className={styles.text}>Made on Fiverr by Hamid Siddiqi</span>
            </a>
        </div>
    );
}
