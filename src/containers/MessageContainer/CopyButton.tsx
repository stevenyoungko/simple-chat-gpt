import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Icon } from '@iconify/react/dist/iconify.js';

interface CopyButtonProps {
  className?: string;
  text: string;
}

const CopyButton = ({ className = "", text }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [copied]);

  return (
    <div className={className}>
      <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
        <div
          role="button"
          className={clsx(
            "cursor-pointer",
            copied ? "text-green-400" : "text-white hover:text-sky-300"
          )}
        >
          <Icon
            icon={
              copied
                ? "mdi:clipboard-check-multiple-outline"
                : "mdi:clipboard-multiple-outline"
            }
            width={20}
          />
        </div>
      </CopyToClipboard>
    </div>
  );
};

export default CopyButton;
