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

export class GroudonEx_932 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mark of Antiquity", powerType: PowerType.ABILITY, text: "As long as Groudon ex is your Active Pokémon, each player's Kyogre ex and Rayquaza ex can't attack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rock Tumble", cost: [], damage: "30", text: "This attack's damage is not affected by Resistance." },
      { name: "Crushing Mantle", cost: [], damage: "50+", text: "You may discard from your hand as many Energy cards as you like. If you do, this attack does 50 damage plus 10 more damage for each Energy card you discarded." }
  ];
  public set: string = "HL";
  public name: string = "Groudon ex";
  public fullName: string = "Groudon ex HL 93";
  public text: string = "Groudon ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
