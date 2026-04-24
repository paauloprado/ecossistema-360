import { cn, Pagination as IPagination, PaginationItemRenderProps, PaginationItemType, PaginationProps, Button } from "@heroui/react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { ComponentType } from "react";

export const Pagination:ComponentType<PaginationProps> = (props) => {
  const renderItem = ({value, key, ref, className, setPage, onNext, onPrevious, onPress, isActive}:PaginationItemRenderProps) => {
    if (value === PaginationItemType.NEXT) {
      return <button 
        key={key} 
        className={cn(className)}
        onClick={onNext}
      >
        <ChevronRight/>
      </button>
    }
    if (value === PaginationItemType.PREV) {
      return <button 
        key={key}
        className={cn(className)}
        onClick={onPrevious}
      >
        <ChevronLeft/>
      </button>
    }
    if (value === PaginationItemType.DOTS) {
      return <button 
        key={key} 
        className={cn(className)}
        onClick={(e) => onPress?.(e as any)}
      >
        <MoreHorizontal size={20}/>
      </button>
    }
    return <button 
      className={cn(className, 
        isActive && "bg-primary text-white"
      )}
      key={key} 
      ref={ref}
      onClick={() => setPage(value)}
    > {value} </button>
  }
    return <IPagination 
      showControls
      radius="full"
      classNames={{
        "item": "text-lemon hover:bg-primary hover:text-lemon",
      }}
      renderItem={renderItem}
      {...props}
    />
}
