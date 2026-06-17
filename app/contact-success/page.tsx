import Link from "next/link";

export default function ContactSuccessPage() {
    return (
        <main className="h-[calc(100vh-70px-75px)] flex justify-center items-center">
            <div className="bg-white shadow rounded-2xl p-6 flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                <h1 className="mt-6 text-2xl text-[#22c55e]">Dziękujemy!</h1>
                <p className="max-w-md pt-3 md:px-3 mb-5">Twój formularz kontaktowy został wysłany pomyślnie. Skontaktujemy się z Tobą najszybciej jak to możliwe!</p>
                <Link href="/" className="hover:underline font-medium">Wróć na stronę główną</Link>
            </div>
        </main>
    );
}