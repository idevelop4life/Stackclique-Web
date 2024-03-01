import { CourseCard } from "../../ui";
import { data } from "./constants/data";
// import { productmangs } from "./constants/productmang";
export default function ProductManagement() {
    const filteredProdMag = data.filter((el) => {
        el.category === "product-management";
    });
    return (
        <section className="px-4 lg:px-[7rem] flex flex-col gap-6">
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {filteredProdMag.map((productmanag) => (
                    <CourseCard key={productmanag.title} {...productmanag} />
                ))}
            </section>

            <h3 className="text-lg font-bold">Recommendations For You</h3>
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {filteredProdMag.slice(5).map((productmanag) => (
                    <CourseCard key={productmanag.title} {...productmanag} />
                ))}
            </section>
        </section>
    );
}
