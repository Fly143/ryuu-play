import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Metagross_114 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Metang";
  public hp: number = 100;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Super Connectivity", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your discard pile for a Psychic or Metal Energy card and attach it to your Active Pokémon. Then, put 1 damage counter on that Pokémon. This power can't be used if Metagross is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Link Blast", cost: [], damage: "70", text: "If Metagross and the Defending Pokémon have a different amount of Energy attached to them, this attack's base damage is 40 instead of 70." }
  ];
  public set: string = "DX";
  public name: string = "Metagross";
  public fullName: string = "Metagross DX 11";
  public text: string = "Metagross";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "attachBasicFromDiscard");
    }
    return state;
  }
}
