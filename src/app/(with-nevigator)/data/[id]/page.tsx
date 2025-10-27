export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const { id } = await params;
  return <div>데이터의 {id}페이지</div>;
}
