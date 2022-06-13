interface Item {
  id: number;
}

interface ComponentProp<T> {
  items: T[];
}

export default function DataGrid<T extends Item>({ items }: ComponentProp<T>) {
  return (
    <div>
      {items.map((item) => (
        <li key={item.id}>{JSON.stringify(item)}</li>
      ))}
    </div>
  );
}
