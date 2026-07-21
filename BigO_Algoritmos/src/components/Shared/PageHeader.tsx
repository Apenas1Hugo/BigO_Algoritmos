
interface  PageHeaderProps {
  title?: string
  description?: string
}

export function PageHeader({ title = " ", description = " " }: PageHeaderProps) {
  return (
    <div className="flex w-full shrink-0 flex-col items-start ">
      <h2 className=" text-foreground text-xl font-semibold sm:text-xl">{title}</h2>
       <p className=" text-muted-foreground mb-1 text-sm leading-6">{description}</p>
    </div>
  );
}