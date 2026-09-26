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

export class Bellossom_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gloom";
  public hp: number = 90;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flower Supplement", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, attach 1 basic Energy card from your hand to 1 of your Benched Pokémon. This power can't be used if Bellossom is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Knife Leaf", cost: [], damage: "30×", text: "Flip 3 coins. This attack does 30 damage times the number of heads." }
  ];
  public set: string = "AQ";
  public name: string = "Bellossom";
  public fullName: string = "Bellossom AQ 5";
  public text: string = "Bellossom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
