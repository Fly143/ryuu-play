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
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Chandelure_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lampent";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flare Navigate", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may search your deck for a Fire Energy card and attach it to 1 of your Pokémon. If you do, put 1 damage counter on that Pokémon. Shuffle your deck afterward.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Absorb Life", cost: [], damage: "70", text: "Heal 30 damage from this Pokémon." }
  ];
  public set: string = "FLF";
  public name: string = "Chandelure";
  public fullName: string = "Chandelure FLF 16";
  public text: string = "Chandelure";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* searchEnergyToSelf */ state;
    }
    return state;
  }
}
