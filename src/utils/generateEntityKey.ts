export default function generateEntityKey(type: string, id: string | number) {
  return `${type}_${id}`;
}
