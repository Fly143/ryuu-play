import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class Zapdos_133 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flash-Pop Flapping", powerType: PowerType.ABILITY, text: "Once during your turn, if you have Moltres and Articuno in play, you may use this Ability. Attach a Basic Lightning Energy card from your hand to this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Thundering Lightning", cost: [], damage: "210", text: "This Pokémon also does 60 damage to itself." }
  ];
  public set: string = "30C";
  public name: string = "Zapdos";
  public fullName: string = "Zapdos 30C 133";
  public text: string = "Zapdos";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
