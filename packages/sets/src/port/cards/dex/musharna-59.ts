import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Musharna_59 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Munna";
  public hp: number = 100;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Forewarn", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may look at the top 2 cards of your deck, choose 1 of them, and put it into your hand. Put the other card back on top of your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fluffy Dream", cost: [], damage: "40", text: "This Pokémon is now Asleep." }
  ];
  public set: string = "DEX";
  public name: string = "Musharna";
  public fullName: string = "Musharna DEX 59";
  public text: string = "Musharna";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "pokedex");
    }
    return state;
  }
}
