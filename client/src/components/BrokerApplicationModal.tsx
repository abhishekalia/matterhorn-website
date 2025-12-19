import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { AppointmentForm } from "@/components/broker/AppointmentForm";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BrokerApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BrokerApplicationModal({ open, onOpenChange }: BrokerApplicationModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] p-0 bg-[#0a1628]/98 backdrop-blur-xl border-primary/20">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-2xl font-bold text-white">Apply to Get Appointed</DialogTitle>
          <DialogDescription className="text-white/70">
            Complete the form below to start your partnership with Matterhorn Insurance Group.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[calc(90vh-120px)] px-6 pb-6">
          <AppointmentForm />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
