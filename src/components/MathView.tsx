import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  content: string;
  className?: string;
  block?: boolean;
}

export const MathView: React.FC<MathViewProps> = ({ content, className = '', block = false }) => {
  const renderedHtml = useMemo(() => {
    if (!content) return '';

    // If block prop is set explicitly, render entire string as math
    if (block) {
      try {
        return katex.renderToString(content, {
          displayMode: true,
          throwOnError: false,
        });
      } catch {
        return content;
      }
    }

    // Process text containing $...$ or $$...$$
    // Regex to split on $$...$$ and $...$
    const parts: string[] = [];
    const regex = /(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(content)) !== null) {
      // Text before math
      if (match.index > lastIndex) {
        const textChunk = content.substring(lastIndex, match.index);
        parts.push(escapeHtml(textChunk).replace(/\n/g, '<br/>'));
      }

      const mathToken = match[0];
      if (mathToken.startsWith('$$') && mathToken.endsWith('$$')) {
        const formula = mathToken.slice(2, -2).trim();
        try {
          parts.push(katex.renderToString(formula, { displayMode: true, throwOnError: false }));
        } catch {
          parts.push(`<code>${escapeHtml(formula)}</code>`);
        }
      } else if (mathToken.startsWith('$') && mathToken.endsWith('$')) {
        const formula = mathToken.slice(1, -1).trim();
        try {
          parts.push(katex.renderToString(formula, { displayMode: false, throwOnError: false }));
        } catch {
          parts.push(`<code>${escapeHtml(formula)}</code>`);
        }
      }

      lastIndex = regex.lastIndex;
    }

    // Remaining text
    if (lastIndex < content.length) {
      const textChunk = content.substring(lastIndex);
      parts.push(escapeHtml(textChunk).replace(/\n/g, '<br/>'));
    }

    return parts.join('');
  }, [content, block]);

  return (
    <span
      className={`inline-math-container ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default MathView;
