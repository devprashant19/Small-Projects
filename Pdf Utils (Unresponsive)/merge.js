const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const MergeTwoPdfs = async (pdf1, pdf2) => {
  await merger.add(pdf1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(pdf2);
  let nm = new Date()
  nm = nm.getTime()
  await merger.save(`public/${nm}.pdf`); //save under given name and reset the internal document
  return nm
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}
const specimerge = async (pdf1, pdf2, p1, p2) => {
  await merger.add(pdf1, p1);
  await merger.add(pdf2, p2);
  let nm = new Date()
  nm = nm.getTime()
  await merger.save(`public/${nm}.pdf`); //save under given name and reset the internal document
  return nm
}
const speci_merge_one = async (pdf1, p1, p2) => {
  await merger.add(pdf1, [p1, p2]);//only works if server restarts
  let nm = new Date()
  nm = nm.getTime()
  await merger.save(`public/${nm}.pdf`); //save under given name and reset the internal document
  return nm
}
const merge_range = async (pdf1, pdf2, p1, p2, p3, p4) => {
  await merger.add(pdf1, `${p1}-${p2}`);
  await merger.add(pdf2, `${p3}-${p4}`);
  let nm = new Date()
  nm = nm.getTime()
  await merger.save(`public/${nm}.pdf`); //save under given name and reset the internal document
  return nm
}
const multiple_both = async (pdf1, pdf2, p1, p2) => {
  let pages_1 = p1.split(",")
  let pages_2 = p2.split(",")
  let a;
  for (let i of pages_1) {
    a = Number.parseInt(i)
    await merger.add(pdf1, a);
  }
  for (let i of pages_2) {
    a = Number.parseInt(i)
    await merger.add(pdf2, a);
  }
  let nm = new Date()
  nm = nm.getTime()
  await merger.save(`public/${nm}.pdf`); //save under given name and reset the internal document
  return nm
}
const multiple_pdf = async (arr) => {
  for (i of arr) {
    await merger.add(i);
  }
  let nm = new Date()
  nm = nm.getTime()
  await merger.save(`public/${nm}.pdf`); //save under given name and reset the internal document
  return nm
}
module.exports = { MergeTwoPdfs, specimerge, speci_merge_one, merge_range, multiple_both, multiple_pdf }