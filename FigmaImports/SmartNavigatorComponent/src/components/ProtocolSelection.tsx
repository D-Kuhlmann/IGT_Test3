import { ImageWithFallback } from './figma/ImageWithFallback';

interface Protocol {
  id: number;
  name: string;
  image: string;
  selected: boolean;
}

interface ProtocolSelectionProps {
  protocols: Protocol[];
  selectedProtocol: number;
  onSelect: (protocolId: number) => void;
}

export function ProtocolSelection({ protocols, selectedProtocol, onSelect }: ProtocolSelectionProps) {
  return (
    <div className="absolute h-[264px] left-0 top-[136px] w-full">
      {/* Title */}
      <div className="absolute flex flex-col font-['CentraleSans:Bold',_sans-serif] justify-center leading-[0] left-[372px] not-italic text-[#d6d6d6] text-[20px] top-[-4px] translate-y-[-50%] w-[300px]">
        <p className="leading-[24px]">Acquisition Protocols</p>
      </div>

      {/* Protocol cards */}
      <div className="absolute flex gap-[8px] items-center left-[372px] top-[32px]">
        {protocols.map((protocol) => (
          <ProtocolCard
            key={protocol.id}
            protocol={protocol}
            isSelected={selectedProtocol === protocol.id}
            onSelect={() => onSelect(protocol.id)}
          />
        ))}
      </div>
    </div>
  );
}

interface ProtocolCardProps {
  protocol: Protocol;
  isSelected: boolean;
  onSelect: () => void;
}

function ProtocolCard({ protocol, isSelected, onSelect }: ProtocolCardProps) {
  return (
    <button
      onClick={onSelect}
      className="box-border flex flex-col h-[232px] items-start p-[4px] relative shrink-0 w-[176px] cursor-pointer hover:opacity-90 transition-opacity"
    >
      {/* Image container */}
      <div className="basis-0 bg-black flex flex-col grow items-end min-h-px min-w-px relative shrink-0 w-full">
        <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
          <ImageWithFallback 
            alt={protocol.name}
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
            src={protocol.image} 
          />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#383838] h-[56px] relative shrink-0 w-full">
        <div className="flex flex-col justify-center size-full">
          <div className="box-border flex flex-col gap-[4px] h-[56px] items-start justify-center p-[8px] relative w-full">
            <div className="flex gap-[8px] items-start relative shrink-0 w-full">
              <div className="basis-0 flex flex-col font-['CentraleSans:Medium',_sans-serif] grow h-[20px] justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#d6d6d6] text-[14px] text-nowrap">
                <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden">
                  {protocol.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selection border */}
      {isSelected && (
        <div className="absolute inset-0 pointer-events-none">
          <div aria-hidden="true" className="absolute border-4 border-[rgba(158,213,255,0.8)] border-solid inset-0" />
        </div>
      )}
    </button>
  );
}
