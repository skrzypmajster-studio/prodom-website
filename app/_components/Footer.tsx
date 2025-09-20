import content from '@/app/content.json';

export const Footer = () => (
    <footer className="border-t border-gray-200 py-6 text-sm text-gray-500">
        <div className="max-w-6xl mx-auto px-6 flex justify-between flex-wrap gap-4">
            <div>© <span id="year">2025</span> <span id="company-name">{content.name}</span> | <span id="author-name"><a href="https://skrzypmajster.github.io">SkrzypMajster</a></span></div>
            <div><a href="#top" className="hover:text-gray-700">Do góry ↑</a></div>
        </div>
    </footer>
)