import { Bundle as MagicStringBundle } from 'magic-string';
import { ChunkDependencies, ChunkExports } from '../Chunk';
import { OutputOptions, RollupWarning } from '../rollup/types';
import amd from './amd';
import cjs from './cjs';
import es from './es';
import iife from './iife';
import system from './system';
import umd from './umd';

export interface FinaliserOptions {
	accessedGlobals: Set<string>;
	dependencies: ChunkDependencies;
	exports: ChunkExports;
	hasExports: boolean;
	indentString: string;
	intro: string;
	isEntryModuleFacade: boolean;
	namedExportsMode: boolean;
	outro: string;
	usesTopLevelAwait: boolean;
	varOrConst: 'var' | 'const';
	warn(warning: RollupWarning): void;
}

export type Finaliser = (
	magicString: MagicStringBundle,
	finaliserOptions: FinaliserOptions,
	options: OutputOptions
) => MagicStringBundle;

export default { system, amd, cjs, es, iife, umd } as {
	[format: string]: Finaliser;
};
