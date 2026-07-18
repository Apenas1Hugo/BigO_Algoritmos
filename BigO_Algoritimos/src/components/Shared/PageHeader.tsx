
interface  PageHeaderProps {
  title?: string
  description?: string
}

export function PageHeader({ title = " ", description = " " }: PageHeaderProps) {
  return (
    <div className="flex shrink-0 flex-col items-start ">
      <h2 className=" text-foreground text-xl font-semibold sm:text-xl">{title}</h2>
       <p className=" text-muted-foreground mb-1 whitespace-nowrap text-sm">{description}</p>
    </div>
  );
}