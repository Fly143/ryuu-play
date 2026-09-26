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

export class Empoleon_117 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Prinplup";
  public hp: number = 140;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Diving Draw", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may discard 1 card from your hand. Then, draw 2 cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Attack Command", cost: [], damage: "10×", text: "Does 10 damage times the number of Pokémon in play (both yours and your opponent's)." }
  ];
  public set: string = "FLF";
  public name: string = "Empoleon";
  public fullName: string = "Empoleon FLF 117";
  public text: string = "Empoleon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesPokemonInPlay(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 2);
    }
    return state;
  }
}
