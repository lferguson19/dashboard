import { BigNumber } from "bignumber.js";

export const ORIGINAL_SUPPLY_AMOUNT: string;
export function getLumenBalance(horizonURL: string, accountId: string): string;
export function totalLumens(horizonURL: string): string;
export function inflationLumens(): Promise<BigNumber>;
export function feePool(): string;
export function burnedLumens(): string;
export function directDevelopmentAll(): Promise<string>;
export function distributionEcosystemSupport(): Promise<string>;
export function distributionUseCaseInvestment(): Promise<string>;
export function distributionUserAcquisition(): Promise<string>;
export function getUpgradeReserve(): string;
export function sdfAccounts(): Promise<BigNumber>;
export function totalSupply(): Promise<BigNumber>;
export function noncirculatingSupply(): Promise<BigNumber>;
export function circulatingSupply(): Promise<BigNumber>;
