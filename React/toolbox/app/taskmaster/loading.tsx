export default function TaskMasterLoading() {
    return (
        <main className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
            <div className="text-center">
                <div className="w-12 h-12 border-4 border-[#2A2A2A] border-t-[#E6C07B] rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-[#E6C07B] font-mono text-xs uppercase animate-pulse">
                    Accessing_Secure_Vault...
                </p>
            </div>
        </main>
    );
}
