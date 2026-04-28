

export function useAppDocuments() {
  const openPdf = (name: string) => {
    window.open(`${import.meta.env.BASE_URL}documents/${name}.pdf`, "_blank");
  };

  const docs = [
    { name: "FLEX 512 АРМИРУЮЩАЯ ПОЛИЭФИРНАЯ ТКАНЬ", file: "tds-rukrov-flex-512" },
    { name: "101 Грунт глубокого проникновения двухкомпонентный", file: "tds-rukrov-101" },
    { name: "201 Гидроизоляционный каучуковый состав", file: "tds-rukrov-201" },
    { name: "203 Гидроизоляционный каучуковый состав «RUKROV-203» с фиброволокном", file: "tds-rukrov-203" },
    { name: "Свидетельство о государственной регистрации продукта", file: "SGR-200" },
    { name: "Протокол испытаний 1", file: "protocol-test-1" },
    { name: "Протокол испытаний 2", file: "protocol-test-2" },
    { name: "Протокол лабораторных испытаний", file: "pi-200" },
    { name: "Экспертное заключение", file: "e-z-200" },
  ];

  return { openPdf,
  docs,};
}