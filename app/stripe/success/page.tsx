import { Button } from "@/components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";


export default function SuccessStripe(){

    return (
        <div className="h-screen">
            <div className="mt-32 md:max-w-[50vw] mx-auto">
                <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Оплата прошла успешно!</h3>
                    <p className="text-gray-600 my-2">Спасибо за покупку.</p>
                    <p>Хорошего дня.</p>

                    <Button variant="outline" asChild className="mt-5 ">
                        <Link href="/">
                            На главную
                        </Link>
                    </Button>
                </div>
            </div>

        </div>
    )
}