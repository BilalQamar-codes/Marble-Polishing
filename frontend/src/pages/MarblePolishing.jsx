import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MarblePolishing from "../components/MarblePolishing";

const MarblePolishingPage = () => {
  return (
    <div>
      <Navbar />
      <MarblePolishing />
      <p style={{ padding: "5%" }}>
        تلميع الرخام الروابي متخصص في تجديد روعة الأسطح الرخامية، وتحويل المناطق
        الباهتة والمتهالكة إلى نقاط محورية مشعة ترفع أجواء أي مساحة. يستخدم
        الحرفيون ذوو المهارات العالية لدينا تقنيات متقدمة ومنتجات متميزة لتلميع
        الرخام بدقة، وإبراز جماله وبريقه المتأصلين. سواء كان مسكنًا سكنيًا، أو
        مؤسسة تجارية، أو تحفة معمارية، فإننا نصمم نهجنا لتلبية الاحتياجات
        الفريدة لكل مشروع، مما يضمن نتائج لا تشوبها شائبة تتجاوز التوقعات. مع
        الاهتمام الشديد بالتفاصيل والشغف بالكمال، فإن شركة تلميع الرخام هي شريكك
        الموثوق به في الحفاظ على الأناقة الخالدة للأسطح الرخامية في جميع أنحاء
        الرياض وخارجها.
      </p>
      <Footer />
    </div>
  );
};

export default MarblePolishingPage;
