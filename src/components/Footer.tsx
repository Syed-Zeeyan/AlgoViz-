export default function Footer() {
    return (
        <footer className="w-full text-center py-4 text-dark dark:text-white">
            © {new Date().getFullYear()} ML/DL Visualizer. An educational tool for machine learning and deep learning concepts.
        </footer>
    );
}
