import { CourseCard } from "../../ui";
import { productmangs } from "./constants/productmang";
export default function ProductManagement() {
    return (
        <section className="px-4 lg:px-[7rem] flex flex-col gap-6">
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {productmangs.map((productmanag) => (
                    <CourseCard key={productmanag.title} {...productmanag} />
                ))}
            </section>

            <h3 className="text-lg font-bold">Recommendations For You</h3>
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {productmangs.slice(5).map((productmanag) => (
                    <CourseCard key={productmanag.title} {...productmanag} />
                ))}
            </section>
        </section>
    );
}
