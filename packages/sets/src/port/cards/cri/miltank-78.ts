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

export class Miltank_78 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Moomoo Malt", powerType: PowerType.ABILITY, text: "As long as this Pokémon is your Active Pokémon, whenever you attach an Energy card from your hand to 1 of your Pokémon, heal 90 damage from that Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sitdown Splash", cost: [], damage: "60+", text: "Flip a coin. If heads, this attack does 30 more damage." }
  ];
  public set: string = "CRI";
  public name: string = "Miltank";
  public fullName: string = "Miltank CRI 78";
  public text: string = "Miltank";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
